export default function Services(){
const services=['Social Media Marketing','Website Development','SEO','Branding','Video Editing','Google Ads'];
return <section style={{padding:'40px'}}>
<h2>Our Services</h2>
<div>{services.map(s=><div key={s} style={{border:'1px solid #ddd',padding:16,margin:10,borderRadius:12}}>{s}</div>)}</div>
</section>
}