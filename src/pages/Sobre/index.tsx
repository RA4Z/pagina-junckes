import styles from './Sobre.module.scss';
import stylesTema from 'styles/Tema.module.scss';
import casa from 'assets/sobre/casa.jpg';
import barril from 'assets/sobre/barril.jpg';


export default function Sobre() {
    return (
        <section>
            <h3 className={stylesTema.titulo}> Sobre nós </h3>
            <div className={styles.sobreNos}>
                <img src={casa} alt='Cachaçaria Junckes' />
                <div className={styles.sobreNos__texto}>
                    <p>
                        A cachaça artesanal tem uma forma de produção mais familiar, com volumes limitados e sabores novos, misturados com ingredientes mais puros e naturais. O resultado é a criação de linhas que seguem uma forma mais criativa de misturar gostos e tons que fazem muita diferença ao toque do paladar.
                    </p>
                    <p>
                        Frutas como banana, limão, frutas vermelhas e entre outras frutas, são transformadoras para o líquido da cachaça. O armazenamento e o envelhecimento tem mais intensidade quando entra em contato com diferentes tipos de madeiras que transformam a bebida em algo muito mais soberano e unicamente irresistível.
                    </p>
                </div>
            </div>

            <div className={styles.sobreNos}>
                <div className={styles.sobreNos__texto}>
                    <p>
                        Na Cachaçaria Junckes, a bebida é armazenada em grandes tonéis de madeira, que conferem à cachaça coloração, gosto e aromas diferenciados. A história do lugar começou há muitos anos, com Laudelino Junckes, responsável por fundar o lugar e montar o alambique, um equipamento próprio para realizar a destilação e assim dar origem à cachaça artesanal.
                    </p>
                    <p>
                        Em 1995, começou a chegar em Jaraguá do Sul a cachaça paulista, em alta produção, feita em usina, o que fez com que os alambiques da região se enfraquecessem, já que não era possível competir com os preços da cachaça de São Paulo.
                    </p>
                    <p>
                        Hoje, Valdenir administra o negócio juntamente com a esposa, Wilma, e o filho Wagner Junckes, mantendo viva a tradição da produção de cachaça que há muitos anos é uma marca registrada da família.
                    </p>
                </div>
                <img src={barril} alt='Barris Junckes' />
            </div>

        </section>
    );
}