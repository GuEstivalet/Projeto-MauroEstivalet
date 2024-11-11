import React from 'react';
import styles from './Tratamentos.module.css';
import fotosData from "../json/fotos.json";

const Tratamentos = () => {
  const [fotos, setFotos] = React.useState([]); 
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);
  const [fotoAtiva, setFotoAtiva] = React.useState(0);

  React.useEffect(() => {
    // Simula a busca das fotos
    try {
      // Acessa as fotos dentro de "fotosData[0].fotos"
      if (!fotosData || fotosData.length === 0 || !fotosData[0].fotos) {
        throw new Error('Fotos não encontradas');
      }
      setFotos(fotosData[0].fotos); // Acessa o array de fotos dentro do JSON
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
      window.scrollTo(0, 0);
    }
  }, []); 

  function handleClick(index) {
    setFotoAtiva(index);
  }

  if (error) return <p>{error}</p>;
  if (loading) return <div className="loading">Carregando...</div>;
  if (fotos.length === 0) return null; // Verifica se há fotos

  return (
    <section className={`${styles.foto} animeLeft`}>
      <div>
      <h1>Dentre nossos serviços, incluem:</h1>
      <div className={`${styles.imagesDisplay}`}>
        <img
          className={styles.destaque}
          src={fotos[fotoAtiva].src} // Usa a foto ativa
          alt={fotos[fotoAtiva].titulo} // Corrige o alt para o título correto
        />
        <div className={styles.wrapper}>
          {fotos.map((foto, index) => (
            <button key={index} onClick={() => handleClick(index)}>
              <img src={foto.src} alt={foto.titulo} className={styles.inativas} />
            </button>
          ))}
        </div>
      </div>
      </div >
      <div className={styles.texto}>
        <h1>{fotos[fotoAtiva].titulo}</h1>
        <p>{fotos[fotoAtiva].texto}</p>
      </div>
    </section>
  );
};

export default Tratamentos;
