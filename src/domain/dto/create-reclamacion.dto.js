"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateReclamacionDto = void 0;
class CreateReclamacionDto {
    constructor(
    //IDENTIFICACIÓN DEL CONSUMIDOR RECLAMANTE
    TipoDocumento, NumeroDocumento, Nombres, Apellidos, Departamento, Provincia, Distrito, Direccion, Telefono, Correo, 
    //IDENTIFICACIÓN DEL CONSUMIDOR RECLAMANTE
    EsMenorEdad, EsProductoEntregado, TipoBien, MontoReclamado, NroPedido, ProductoAdquirido, 
    //DETALLE DE LA RECLAMACIÓN Y PEDIDO DEL CONSUMIDOR
    TipoReclamo, DetalleReclamo, PedidoReclamo, FechaRespuesta, 
    //Datos del Apoderado (si reclamante es menor de edad)
    NombrePadre, DireccionPadre, TelefonoPadre, CorreoPadre, 
    //Datos del Producto (si es que el producto ha sido entregado)
    NumeroBoleta, FechaCompra) {
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
        this.EsProductoEntregado = EsProductoEntregado;
        this.TipoBien = TipoBien;
        this.MontoReclamado = MontoReclamado;
        this.NroPedido = NroPedido;
        this.ProductoAdquirido = ProductoAdquirido;
        this.TipoReclamo = TipoReclamo;
        this.DetalleReclamo = DetalleReclamo;
        this.PedidoReclamo = PedidoReclamo;
        this.FechaRespuesta = FechaRespuesta;
        this.NombrePadre = NombrePadre;
        this.DireccionPadre = DireccionPadre;
        this.TelefonoPadre = TelefonoPadre;
        this.CorreoPadre = CorreoPadre;
        this.NumeroBoleta = NumeroBoleta;
        this.FechaCompra = FechaCompra;
    }
    static create(props) {
        const { TipoDocumento, NumeroDocumento, Nombres, Apellidos, Departamento, Provincia, Distrito, Direccion, Telefono, Correo, EsMenorEdad, NombrePadre, DireccionPadre, TelefonoPadre, CorreoPadre, EsProductoEntregado, NumeroBoleta, FechaCompra, TipoBien, MontoReclamado, NroPedido, ProductoAdquirido, TipoReclamo, DetalleReclamo, PedidoReclamo } = props;
        const emptyToNull = (value) => {
            return value === "" || value === undefined ? undefined : value;
        };
        if (!TipoDocumento)
            return ['TipoDocumento is required', undefined];
        if (!NumeroDocumento)
            return ['NumeroDocumento is required', undefined];
        if (!Nombres)
            return ['Nombres is required', undefined];
        if (!Apellidos)
            return ['Apellidos is required', undefined];
        if (!Departamento)
            return ['Departamento is required', undefined];
        if (!Provincia)
            return ['Provincia is required', undefined];
        if (!Provincia)
            return ['Provincia is required', undefined];
        if (!Distrito)
            return ['Distrito is required', undefined];
        if (!Direccion)
            return ['Direccion is required', undefined];
        if (!Telefono)
            return ['Telefono is required', undefined];
        if (!Correo)
            return ['Correo is required', undefined];
        // if(EsMenorEdad === undefined ) return ['EsMenorEdad is required', undefined];
        // if(!NombrePadre) return ['NombrePadre is required', undefined];
        // if(!DireccionPadre) return ['DireccionPadre is required', undefined];
        // if(!TelefonoPadre) return ['TelefonoPadre is required', undefined];
        // if(!CorreoPadre) return ['CorreoPadre is required', undefined];
        // if(EsProductoEntregado === undefined) return ['EsProductoEntregado is required', undefined];
        // if(!NumeroBoleta) return ['NumeroBoleta is required', undefined];
        // if(!FechaCompra) return ['FechaCompra is required', undefined];
        if (!TipoBien)
            return ['TipoBien is required', undefined];
        if (!MontoReclamado)
            return ['MontoReclamado is required', undefined];
        if (!NroPedido)
            return ['NroPedido is required', undefined];
        if (!ProductoAdquirido)
            return ['ProductoAdquirido is required', undefined];
        if (!TipoReclamo)
            return ['TipoReclamo is required', undefined];
        if (!DetalleReclamo)
            return ['DetalleReclamo is required', undefined];
        if (!PedidoReclamo)
            return ['PedidoReclamo is required', undefined];
        const FechaRespuesta = new Date();
        FechaRespuesta.setDate(FechaRespuesta.getDate() + 15);
        const reclamo = new CreateReclamacionDto(TipoDocumento, NumeroDocumento, Nombres, Apellidos, Departamento, Provincia, Distrito, Direccion, Telefono, Correo, EsMenorEdad, EsProductoEntregado, TipoBien, MontoReclamado, NroPedido, ProductoAdquirido, TipoReclamo, DetalleReclamo, PedidoReclamo, FechaRespuesta, emptyToNull(NombrePadre), emptyToNull(DireccionPadre), emptyToNull(TelefonoPadre), emptyToNull(CorreoPadre), emptyToNull(NumeroBoleta), emptyToNull(FechaCompra));
        return [undefined, reclamo];
    }
}
exports.CreateReclamacionDto = CreateReclamacionDto;
