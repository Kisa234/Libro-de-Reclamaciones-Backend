"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReclamacionEntity = void 0;
class ReclamacionEntity {
    constructor(id, nroReclamacion, 
    //IDENTIFICACIÓN DEL CONSUMIDOR RECLAMANTE
    TipoDocumento, NumeroDocumento, Nombres, Apellidos, Departamento, Provincia, Distrito, Direccion, Telefono, Correo, 
    //Datos del Apoderado (si reclamante es menor de edad)
    EsMenorEdad, NombrePadre, DireccionPadre, TelefonoPadre, CorreoPadre, 
    //IDENTIFICACIÓN DEL CONSUMIDOR RECLAMANTE
    EsProductoEntregado, NumeroBoleta, FechaCompra, TipoBien, MontoReclamado, NroPedido, ProductoAdquirido, 
    //DETALLE DE LA RECLAMACIÓN Y PEDIDO DEL CONSUMIDOR
    TipoReclamo, FechaReclamo, DetalleReclamo, PedidoReclamo, FechaRespuesta) {
        this.id = id;
        this.nroReclamacion = nroReclamacion;
        this.TipoDocumento = TipoDocumento;
        this.NumeroDocumento = NumeroDocumento;
        this.Nombres = Nombres;
        this.Apellidos = Apellidos;
        this.Departamento = Departamento;
        this.Provincia = Provincia;
        this.Distrito = Distrito;
        this.Direccion = Direccion;
        this.Telefono = Telefono;
        this.Correo = Correo;
        this.EsMenorEdad = EsMenorEdad;
        this.NombrePadre = NombrePadre;
        this.DireccionPadre = DireccionPadre;
        this.TelefonoPadre = TelefonoPadre;
        this.CorreoPadre = CorreoPadre;
        this.EsProductoEntregado = EsProductoEntregado;
        this.NumeroBoleta = NumeroBoleta;
        this.FechaCompra = FechaCompra;
        this.TipoBien = TipoBien;
        this.MontoReclamado = MontoReclamado;
        this.NroPedido = NroPedido;
        this.ProductoAdquirido = ProductoAdquirido;
        this.TipoReclamo = TipoReclamo;
        this.FechaReclamo = FechaReclamo;
        this.DetalleReclamo = DetalleReclamo;
        this.PedidoReclamo = PedidoReclamo;
        this.FechaRespuesta = FechaRespuesta;
    }
    static fromObject(obj) {
        const { id, nroReclamacion, TipoDocumento, NumeroDocumento, Nombres, Apellidos, Departamento, Provincia, Distrito, Direccion, Telefono, Correo, EsMenorEdad, NombrePadre, DireccionPadre, TelefonoPadre, CorreoPadre, EsProductoEntregado, NumeroBoleta, FechaCompra, TipoBien, MontoReclamado, NroPedido, ProductoAdquirido, TipoReclamo, FechaReclamo, DetalleReclamo, PedidoReclamo, FechaRespuesta } = obj;
        if (!id)
            throw new Error('id is required');
        if (!nroReclamacion)
            throw new Error('nroReclamacion is required');
        if (!TipoDocumento)
            throw new Error('TipoDocumento is required');
        if (!TipoDocumento)
            throw new Error('TipoDocumento is required');
        if (!NumeroDocumento)
            throw new Error('NumeroDocumento is required');
        if (!Nombres)
            throw new Error('Nombres is required');
        if (!Apellidos)
            throw new Error('Apellidos is required');
        if (!Departamento)
            throw new Error('Departamento is required');
        if (!Provincia)
            throw new Error('Provincia is required');
        if (!Distrito)
            throw new Error('Distrito is required');
        if (!Direccion)
            throw new Error('Direccion is required');
        if (!Telefono)
            throw new Error('Telefono is required');
        if (!Correo)
            throw new Error('Correo is required');
        // if(!EsMenorEdad) throw new Error('EsMenorEdad is required');
        // if(!NombrePadre) throw new Error('NombrePadre is required');
        // if(!DireccionPadre) throw new Error('DireccionPadre is required');
        // if(!TelefonoPadre) throw new Error('TelefonoPadre is required');
        // if(!CorreoPadre) throw new Error('CorreoPadre is required');
        // if(!EsProductoEntregado) throw new Error('EsProductoEntregado is required');
        // if(!NumeroBoleta) throw new Error('NumeroBoleta is required');
        // if(!FechaCompra) throw new Error('FechaCompra is required');
        if (!TipoBien)
            throw new Error('TipoBien is required');
        if (!MontoReclamado)
            throw new Error('MontoReclamado is required');
        if (!NroPedido)
            throw new Error('NroPedido is required');
        if (!ProductoAdquirido)
            throw new Error('ProductoAdquirido is required');
        if (!TipoReclamo)
            throw new Error('TipoReclamo is required');
        if (!FechaReclamo)
            throw new Error('FechaReclamo is required');
        if (!DetalleReclamo)
            throw new Error('DetalleReclamo is required');
        if (!PedidoReclamo)
            throw new Error('PedidoReclamo is required');
        if (!FechaRespuesta)
            throw new Error('FechaRespuesta is required');
        return new ReclamacionEntity(id, nroReclamacion, TipoDocumento, NumeroDocumento, Nombres, Apellidos, Departamento, Provincia, Distrito, Direccion, Telefono, Correo, EsMenorEdad, NombrePadre, DireccionPadre, TelefonoPadre, CorreoPadre, EsProductoEntregado, NumeroBoleta, FechaCompra, TipoBien, MontoReclamado, NroPedido, ProductoAdquirido, TipoReclamo, FechaReclamo, DetalleReclamo, PedidoReclamo, FechaRespuesta);
    }
}
exports.ReclamacionEntity = ReclamacionEntity;
