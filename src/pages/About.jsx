import Header from './Header';    
import Footer from './Footer';
import '../Styles/App.css'

function About() {
  return (
    <div style={{ padding: '20px' }}>
        <Header/>
      <h2>About Us</h2>
      <p>
        Welcome to <strong>Tsakus Store</strong>, your number one source for fashion, electronics, and more.
        We're dedicated to giving you the very best experience, with a focus on quality, reliability,
        and excellent customer service.
      </p>
      <button style={{textAlign:'center',backgroundColor:'auto',alignSelf:'center',border:10,borderRadius:10,padding:10,}}>Read more</button>
      <p>
        Founded this year, Tsakus stores has come a long way from its beginnings as a small startup. We hope you enjoy our products as much as we enjoy offering them to you!
      </p>

      <h3 style={{ marginTop: '30px' }}>Our Story in Pictures</h3>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '15px', marginTop: '15px', justifyContent: 'center', alignItems: 'center'}}>
        <img src="/black.jpg" alt="Our Team" style={{ width: '250px', borderRadius: '8px'}} />
        <img src="/istockphoto-1135952826-612x612.jpg" alt="Our Store" style={{ width: '250px', borderRadius: '8px' }} />
        <img src="/istockphoto-1474109960-612x612.jpg" alt="Behind the Scenes" style={{ width: '250px', borderRadius: '8px' }} />
        <img src="/istockphoto-1494907747-612x612.jpg" alt="Customer Support" style={{ width: '250px', borderRadius: '8px' }} />
        <img src="/istockphoto-1347626326-612x612.jpg" alt="Packaging Team" style={{ width: '250px', borderRadius: '8px' }} />
        <p>the site encourages to live together with the app for ux welcome</p>
      </div>
      <Footer/>
    </div>
  );
}
export default About;