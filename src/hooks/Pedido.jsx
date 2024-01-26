import { createContext, useContext, useEffect, useState } from "react";
import { api } from "../services/api";
import { useAlertBox } from "./AlertBox";
import Proptypes from "prop-types";

const PedidoContext = createContext({});

function PedidoProvider({ children }) {
  const { showAlertBox } = useAlertBox();
  const [pedido, setPedido] = useState({});
  const [pedidoQtdd, setPedidoQtdd] = useState(0);

  async function criarPedido() {
    try {
      const response = await api.post("pedidos", { status: "Aberto" });

      if (response.status === 201) {
        setPedido(response.data);
        localStorage.setItem(
          "@foodexplorer:pedido_id",
          JSON.stringify(response.data.id)
        );
        return response.data.id;
      }
    } catch (error) {
      console.log(error);
      showAlertBox({
        message: "Erro ao criar pedido",
        type: "warning",
      });
    }
  }

  async function adicionarPrato(prato) {
    try {
      const pedido_id = pedido.id || (await criarPedido());

      const response = await api.post("pedidopratos", { pedido_id, prato });

      if (response.status === 200) {
        localStorage.setItem(
          "@foodexplorer:pedido_qtdd",
          JSON.stringify(pedidoQtdd + 1)
        );
        setPedidoQtdd((prev) => prev + 1);

        showAlertBox({
          message: "Prato adicionado ao pedido",
        });
      }
    } catch (error) {
      console.log(error);
      showAlertBox({
        message: "Erro ao adicionar o prato ao pedido",
        type: "warning",
      });
    }
  }

  useEffect(() => {
    const id = localStorage.getItem("@foodexplorer:pedido_id");
    const qtdd = Number(localStorage.getItem("@foodexplorer:pedido_qtdd"));
    if (id) {
      setPedido({ id });
      setPedidoQtdd(qtdd);
    } else {
      setPedido({});
      setPedidoQtdd(0);
    }
  }, []);

  return (
    <PedidoContext.Provider value={{ adicionarPrato, pedidoQtdd }}>
      {children}
    </PedidoContext.Provider>
  );
}

PedidoProvider.propTypes = {
  children: Proptypes.node,
};

function usePedido() {
  const context = useContext(PedidoContext);

  return context;
}

export { PedidoProvider, usePedido };
