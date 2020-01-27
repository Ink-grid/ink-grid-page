import React from 'react';
import Carousel from '../../components/Carousel/'
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';


const Nosotros = ()=>{
    const Imagenes=[
        {
            url: 'https://www.impactbnd.com/hubfs/blog-image-uploads/best-about-us-pages.jpg'
        },
        {
            url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrfCtuXXu8xNA_rJ22OtEFbLhsYXcmaf1GHBtYSbX9mGxzy2T5&s'
        },
        {
            url: 'https://oceantraship.com/wp-content/uploads/2019/06/about-us.jpg'
        }
    ]


    return (<div>
        
        <Carousel images={Imagenes}/>
        
        <Container maxWidth="sm">
        <Typography component="div" style={{ textAlign:'center',padding:'1em', lineHeight:'2em' }} >
            We help organizations across the private, public, and social sectors create Change that Matters.

            From the C-suite to the front line, we partner with our clients to transform their organizations in the ways that matter most to them. This requires embedding digital, analytics, and design into core processes and mind-sets, and building capabilities that help organizations and people to thrive in an ever-changing context.

            Wit exceptional people in 65 countries, we combine global expertise and local insight to help you turn your ambitious goals into reality.
        </Typography>

      </Container>
        </div>)

        
}
export default Nosotros;