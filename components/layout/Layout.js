import Head from 'next/head'
import Header from './Header'
import Footer from './Footer'

export default function Layout({ children, title = "G-L NAO Services - Votre boutique PC au Bénin" }) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content="Boutique spécialisée en PC et accessoires informatiques au Bénin" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      
      {/* Structure verticale stricte */}
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 w-full">
          {children}
        </main>
        <Footer />
      </div>
    </>
  )
}