import Head from 'next/head';

import { Header } from '../components/Header';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Meu curriculo</title>
      </Head>
      <main >
        <Header />

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
