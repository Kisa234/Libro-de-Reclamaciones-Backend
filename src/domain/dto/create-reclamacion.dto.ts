
export class CreateReclamacionDto{

    constructor(
    //IDENTIFICACIÓN DEL CONSUMIDOR RECLAMANTE

        public TipoDocumento: string,
        public NumeroDocumento: string,
        public Nombres: string,
        public Apellidos: string,
        public Departamento: string,
        public Provincia: string,
        public Distrito: string,
        public Direccion: string,
        public Telefono : string,
        public Correo: string,
        
        //IDENTIFICACIÓN DEL CONSUMIDOR RECLAMANTE
        public EsMenorEdad: boolean,
        public EsProductoEntregado: boolean,
        public TipoBien:string,
        public MontoReclamado: string,
        public NroPedido: string,
        public ProductoAdquirido: string,
    
     
       //DETALLE DE LA RECLAMACIÓN Y PEDIDO DEL CONSUMIDOR
        public TipoReclamo: string,
        public DetalleReclamo: string,
        public PedidoReclamo: string,
        public FechaRespuesta: Date,


        

        //Datos del Apoderado (si reclamante es menor de edad)
    
        public NombrePadre?: string,
        public DireccionPadre?: string,
        public TelefonoPadre?: string,
        public CorreoPadre?: string,

        //Datos del Producto (si es que el producto ha sido entregado)
        public NumeroBoleta?: string,
        public FechaCompra?: string,

    ){}

    

    static create(props: { [key: string]: any }): [string?, CreateReclamacionDto?]{
        let {
            TipoDocumento, NumeroDocumento, Nombres, Apellidos,
            Departamento, Provincia, Distrito, Direccion, Telefono,
            Correo, EsMenorEdad, NombrePadre, DireccionPadre, TelefonoPadre,
            CorreoPadre, EsProductoEntregado, NumeroBoleta, FechaCompra,
            TipoBien, MontoReclamado, NroPedido, ProductoAdquirido,
            TipoReclamo, DetalleReclamo, PedidoReclamo
        } = props;

        const emptyToNull = (value?: string): string | undefined => {
            return value === "" || value === undefined ? undefined : value;
        }

        if(!TipoDocumento) return ['TipoDocumento is required', undefined];
        if(!NumeroDocumento) return ['NumeroDocumento is required', undefined];
        if(!Nombres) return ['Nombres is required', undefined];
        if(!Apellidos) return ['Apellidos is required', undefined];
        if(!Departamento) return ['Departamento is required',   undefined];
        if(!Provincia) return ['Provincia is required', undefined]; 
        if(!Provincia) return ['Provincia is required', undefined];
        if(!Distrito) return ['Distrito is required', undefined];
        if(!Direccion) return ['Direccion is required' , undefined];
        if(!Telefono) return ['Telefono is required', undefined];
        if(!Correo) return ['Correo is required',   undefined];
        // if(EsMenorEdad === undefined ) return ['EsMenorEdad is required', undefined];
        // if(!NombrePadre) return ['NombrePadre is required', undefined];
        // if(!DireccionPadre) return ['DireccionPadre is required', undefined];
        // if(!TelefonoPadre) return ['TelefonoPadre is required', undefined];
        // if(!CorreoPadre) return ['CorreoPadre is required', undefined];
        // if(EsProductoEntregado === undefined) return ['EsProductoEntregado is required', undefined];
        // if(!NumeroBoleta) return ['NumeroBoleta is required', undefined];
        // if(!FechaCompra) return ['FechaCompra is required', undefined];
        if(!TipoBien) return ['TipoBien is required', undefined];
        if(!MontoReclamado) return ['MontoReclamado is required', undefined];
        if(!NroPedido) return ['NroPedido is required', undefined];
        if(!ProductoAdquirido) return ['ProductoAdquirido is required', undefined];
        if(!TipoReclamo) return ['TipoReclamo is required', undefined];
        if(!DetalleReclamo) return ['DetalleReclamo is required', undefined];
        if(!PedidoReclamo) return ['PedidoReclamo is required', undefined];

        Nombres = Nombres.toUpperCase();
        Apellidos = Apellidos.toUpperCase();
        Departamento = Departamento.toUpperCase();
        Provincia = Provincia.toUpperCase();
        Distrito = Distrito.toUpperCase();
        Direccion = Direccion.toUpperCase();
        Correo = Correo.toUpperCase();
        ProductoAdquirido = ProductoAdquirido.toUpperCase();
        DetalleReclamo = DetalleReclamo.toUpperCase();
        PedidoReclamo = PedidoReclamo.toUpperCase();
        TipoBien = TipoBien.toUpperCase();
        TipoReclamo = TipoReclamo.toUpperCase();

        if(EsMenorEdad === 'true'){
            NombrePadre = NombrePadre.toUpperCase();
            DireccionPadre = DireccionPadre.toUpperCase();
            CorreoPadre = CorreoPadre.toUpperCase();
        }

        const FechaRespuesta = new Date();
        FechaRespuesta.setDate(FechaRespuesta.getDate() + 15);
        
        const reclamo = new CreateReclamacionDto(
            TipoDocumento, NumeroDocumento, Nombres, Apellidos, Departamento,
            Provincia, Distrito, Direccion, Telefono, Correo,
            EsMenorEdad, EsProductoEntregado, TipoBien, MontoReclamado, NroPedido, ProductoAdquirido,
            TipoReclamo, DetalleReclamo, PedidoReclamo, FechaRespuesta,
            emptyToNull(NombrePadre), emptyToNull(DireccionPadre), emptyToNull(TelefonoPadre), emptyToNull(CorreoPadre),
            emptyToNull(NumeroBoleta), emptyToNull(FechaCompra)
        );
        

        return [undefined, reclamo];
    }

}