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
    <link href="https://fonts.googleapis.com/css?family=Poiret+One" rel="stylesheet"/>
</Head>
<App/>
 </div>   
}


export default Home
