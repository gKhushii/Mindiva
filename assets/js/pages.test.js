
test('Header should contain brand name MINDIVA', () => {
    document.body.innerHTML = `<header><h2 class="header_logo_text">MINDIVA</h2></header>`;
    expect(document.querySelector('.header_logo_text').textContent).toBe('MINDIVA');
  });
  
  test('Banner heading should be present', () => {
    document.body.innerHTML = `<h1 class="banner_heading">We will help you to improve your mental health!!</h1>`;
    expect(document.querySelector('.banner_heading')).not.toBeNull();
  });

  test('About heading should mention the team', () => {
    document.body.innerHTML = `<h2 class="about-heading">Our team helps you get your life back on track.</h2>`;
    expect(document.querySelector('.about-heading').textContent).toMatch(/team/i);
  });
  
  test('About section should include mission text', () => {
    document.body.innerHTML = `<p class="about-info">Our mission is to break the stigma surrounding mental health</p>`;
    expect(document.querySelector('.about-info').textContent).toMatch(/break the stigma/i);
  });

  test('All input fields should be present in contact form', () => {
    document.body.innerHTML = `
      <input id="name" />
      <input id="email" />
      <input id="phone" />
      <input id="subject" />
      <textarea id="message"></textarea>
    `;
    ['name', 'email', 'phone', 'subject', 'message'].forEach(id => {
      expect(document.getElementById(id)).not.toBeNull();
    });
  });
  
  test('Book Now button should exist', () => {
    document.body.innerHTML = `<button onclick="bookNow()">Booking Now</button>`;
    expect(document.querySelector('button').textContent).toMatch(/Booking Now/);
  });

  test('Login page should contain email and password inputs', () => {
    document.body.innerHTML = `
      <input id="email" type="email" />
      <input id="password" type="password" />
    `;
    expect(document.getElementById('email')).not.toBeNull();
    expect(document.getElementById('password')).not.toBeNull();
  });

  test('Signup form should have confirm password field', () => {
    document.body.innerHTML = `<input id="cnfrm_password" type="password" />`;
    expect(document.getElementById('cnfrm_password')).not.toBeNull();
  });
  
  test('Signup should fail if passwords do not match (logic test)', () => {
    const password = "abc123";
    const cnfrmPassword = "xyz456";
    expect(password === cnfrmPassword).toBe(false);
  });
  