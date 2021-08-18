import Head from 'next/head'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Meu curriculo</title>
        <meta name="description" content="Página pessoal com meu curriculo" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main >
        <h1 >
          Seja bem vindo!
        </h1>

        <p>
          Para meu curriculo acesse <a href="http://www.claudio.eng.br/">claudio.eng.br</a>
        </p>
      </main>
    </div>
  )
}
