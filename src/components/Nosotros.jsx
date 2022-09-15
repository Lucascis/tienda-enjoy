const Nosotros = () => {
    return (
        <div className="nosotros">
            <section>
                <h2 aria-label="Conoce quienes somos" tabIndex="0">Empresa</h2>
                <p aria-label="Una breve descripcion sobre nuestra empresa" tabIndex="0">
                    Somos una empresa joven conformada por amantes de la tecnología
                    que te brindará la mejor atención posible para que puedas
                    conseguir ese producto que tanto buscas.
                </p>
            </section>
            <section>
                <h2 aria-label="Esto es nuestra vision" tabIndex="0">Visión</h2>
                <p aria-label="Una breve descripcion sobre nuestra vision como empresa" tabIndex="0">
                    Nuestra visión desde Tienda Enjoy es ser la tienda informática
                    número uno de Argentina. Ofrecer hardware de calidad a un
                    excelente precio y brindar una experiencia centrada en la
                    satisfacción del cliente, productos de vanguardia y
                    últimos lanzamientos.
                </p>
            </section>
        </div>
    );
}

export default Nosotros;