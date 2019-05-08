const createDom = (text, type) => {
  let $dom = document.querySelector('.modal-layer');
  if ($dom) {
    $dom.remove();
  }

  $dom = document.createElement('div');
  $dom.classList.add('modal-layer');
  $dom.classList.add(type || 'default');
  $dom.innerHTML = text;
  return $dom;
};

return {
  showToast: (text, type) => {
    const $dom = createDom(text, type);
    document.body.appendChild($dom);
    // setTimeout(() => {
    //   $dom.classList.add('show');
    // }, 1);

    // $dom.addEventListener('click', function (event) {
    //   $dom.classList.remove('show');
    // });
  },
};
