import Footer from './Footer'
import Navigation from './Navigation'

function Layout({children}) {
  return (
    <div className='page'>
    <Navigation navigation={false}/>
    <div style={{height:"80vh", padding:"0.5rem"}}>
        {children}
    </div>
    <Footer />
    </div>
  )
}

export default Layout