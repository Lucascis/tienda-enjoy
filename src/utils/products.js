/* eslint-disable no-multi-str */
const products = [
    {
        id: 1,
        name: "Teclado Hyperx Alloy FPS PRO",
        price: 11000,
        img: 'hyperx_alloy_fps_pro.webp',
        videoUrl:"https://www.youtube.com/embed/NjoKy91bWkM",
        stock: 6,
        description: "HyperX ™ Alloy FPS y Alloy FPS Pro son teclados diseñados para\
        brindar durabilidad, confiabilidad y precisión.Con su diseño\
        compacto, su sólido marco de acero y sus interruptores de llave\
        CHERRY® MX, la familia de teclados Alloy FPS es perfecta para el\
        juego serio de FPS.Ya sea que prefiera el diseño magro y medio\
        sin llave(TKL) del Alloy FPS Pro o el Alloy FPS de tamaño\
        completo, ambos modelos cuentan con retroiluminación roja dinámica\
        de HyperX, 100% Anti - Ghosting, reinicio de N- key y Modo de juego.\
        Obtenga el equipo en el que confían los profesionales y prepárese\
        con un teclado HyperX Alloy FPS hoy.",
        category: {
            id: 3,
            name: "teclados"
        }
    },
    {
        id: 2,
        name: "Auricualares Hyperx Cloud Alpha",
        price: 18000,
        img: 'hyperx_cloud_alpha.webp',
        videoUrl:"https://www.youtube.com/embed/Tk1HNPtIgUg",
        stock: 4,
        description:"El innovador diseño del Cloud Alpha de HyperX™ con tecnología de\
        altavoces con cámara doble te brindará un sonido con mayor nivel\
        de nitidez y claridad gracias a la reducción de distorsión. La\
        cámara doble separa los graves de los medios y agudos, permitiendo\
        una sintonización óptima que producirá un sonido más limpio y\
        suave. Los audífonos Cloud Alpha ostentan la fama de la\
        galardonada comodidad de HyperX, con memory foam premium rojo,\
        banda de sujeción expandida y cuero suave más flexible. La\
        estructura de aluminio está construida para una mayor durabilidad,\
        y pensando en las necesidades de cada jugador, el Cloud Alpha\
        también cuenta con un resistente cable trenzado extraíble. El\
        micrófono desmontable con cancelación de ruido está certificado\
        por Discord y TeamSpeak™, lo cual te asegura que tendrás una gran\
        calidad de comunicación con tu equipo. Compatibilidad\
        multi-plataforma, con controles de audio en el cable, por eso los\
        jugadores exigentes, ya sea de PC, PS4™, Xbox One™ y otras\
        plataformas con puertos de 3.5mm se verán beneficiados con el\
        sonido avanzado de la evolución del Cloud Alpha.",
        category: {
            id: 1,
            name: "auriculares"
        }
    },
    {
        id: 3,
        name: "Mouse Logitech G403",
        price: 7000,
        img: 'logitech_g403.webp',
        videoUrl:"https://www.youtube.com/embed/nMjQHD_vGmE",
        stock: 8,
        description:"Logitech diseña productos y experiencias que ocupan un lugar\
        cotidiano en la vida de las personas, poniendo foco en la\
        innovación y la calidad. Su objetivo es crear momentos\
        verdaderamente únicos y significativos para sus usuarios. Los\
        mouses Logitech se adaptan a la forma de tu mano para\
        proporcionarte horas de comodidad. Sin necesidad de mover el brazo\
        para deslizar el cursor, tu mano se fatigará menos. Son ideales\
        para cualquier espacio de trabajo y quienes tienen la mesa llena\
        de diversos objetos.",
        category: {
            id: 2,
            name: "mouse"
        }
    }
]

module.exports = {
    products,
}