import App from '../src/app'
import 'normalize.css'
import 'animate.css'
import '../src/static/app.css'
import Head from 'next/head'

const Home =()=>{
return<div>
<Head>
    <title>A Developer Named Ryan </title>
    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    <meta name="viewport" content="width=device-width"></meta>
    <link href="https://fonts.googleapis.com/css?family=Poiret+One" rel="stylesheet"/>
    <link href="https://fonts.googleapis.com/css?family=Roboto+Condensed" rel="stylesheet"/>
</Head>
<div className='Main-Container'>

<div id='loadingscreen'>
    <div className="Splash-Logo animated fadeIn ">
    <div className="Splash-Logo-Letter-Container" >
            <span className="Splash-Logo-Letter">R</span>
    </div>
    <div className="Splash-Logo-Letter-Container" >
            <span className="Splash-Logo-Letter">B</span>
    </div>
    </div>
<div className="lds-ring"><div></div><div></div><div></div><div></div></div>
</div>
<App/>
 </div>   
</div>
}


export default Home
