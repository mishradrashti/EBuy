let text = document.getElementById('text');
let plant1 = document.getElementById('plant1');
let plant2 = document.getElementById( 'plant2');
window.addEventListener('scroll', () => {
let value = window.scrollY;
text.style.marginTop = value * 2.5 + 'px';
plant2.style.left = value * -1.5 + 'px';
plant1.style.right= value * 1.5 + 'px';
});