// Takin Holidays starter interactions
document.querySelectorAll('.menu-toggle').forEach(button=>{
  button.addEventListener('click',()=>{
    const nav=button.parentElement.querySelector('.main-nav');
    const open=nav.classList.toggle('open');
    button.setAttribute('aria-expanded',String(open));
    button.textContent=open?'âœ•':'â˜°';
  });
});
document.querySelectorAll('[data-year]').forEach(el=>el.textContent=new Date().getFullYear());
document.querySelectorAll('[data-enquiry]').forEach(form=>{
  form.addEventListener('submit',event=>{
    event.preventDefault();
    const data=new FormData(form);
    const message=[
      'Hello Takin Holidays, I would like to enquire about a trip.',
      'Name: '+data.get('name'),
      'Phone: '+data.get('phone'),
      'Interest: '+data.get('interest'),
      'Travel date: '+(data.get('date')||'Flexible'),
      'Please share itinerary details and a quotation.'
    ].join('\n');
    const note=form.querySelector('.form-note');
    note.textContent='Your message is ready. WhatsApp will open so you can send the enquiry.';
    // Replace 91XXXXXXXXXX with the business WhatsApp number in international format.
    const businessWhatsApp='91XXXXXXXXXX';
    if(!/^91\d{10}$/.test(businessWhatsApp)){
      const url='https://wa.me/?text='+encodeURIComponent(message);
      window.open(url,'_blank','noopener');
    }else{
      window.open('https://wa.me/'+businessWhatsApp+'?text='+encodeURIComponent(message),'_blank','noopener');
    }
  });
});
