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
</Head>
<div id='loadingscreen'>
<div class="lds-ring"><div></div><div></div><div></div><div></div></div>
</div>
<App/>
 </div>   
}


export default Home
