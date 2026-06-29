
  function switchPage(page, btn) {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.querySelectorAll('.nav-tab').forEach(t => t.classList.remove('active'));
    document.getElementById('page-' + page).classList.add('active');
    btn.classList.add('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function loadHeroPhoto(e) {
    const file = e.target.files[0];
    if (!file) return;
    const url = URL.createObjectURL(file);
    const pp = document.getElementById('heroPP');
    const img = document.createElement('img');
    img.src = url; img.className = 'ph-img';
    pp.querySelectorAll('.ph-icon,.ph-text').forEach(el => el.style.display = 'none');
    pp.appendChild(img);
  }

  function loadMiniSlot(e, slot) {
    const file = e.target.files[0];
    if (!file) return;
    const img = document.createElement('img');
    img.src = URL.createObjectURL(file);
    slot.querySelector('i').style.display = 'none';
    slot.appendChild(img);
  }

  function loadSlotPhoto(e, slot) {
    const file = e.target.files[0];
    if (!file) return;
    const img = document.createElement('img');
    img.src = URL.createObjectURL(file);
    slot.querySelector('i').style.display = 'none';
    slot.querySelector('span').style.display = 'none';
    slot.appendChild(img);
  }
