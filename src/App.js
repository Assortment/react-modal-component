import React from 'react';
import Modal from './components/Modal';

const App = () => {
  const modalContent = (
    <div>
      <p>Hello world Lorem ipsum dolor sit amet, <a href="#1">first link</a> consectetur adipiscing elit. Phasellus sagittis erat ut ex bibendum consequat. Morbi luctus ex ex, at varius purus <a href="#2">second link</a> vehicula consectetur. Curabitur a sapien a augue consequat rhoncus. Suspendisse commodo ullamcorper nibh quis blandit. Etiam viverra neque quis mauris efficitur, lobortis aliquam ex pharetra. Nam et ante ex. Sed gravida gravida ligula, non blandit nunc. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Integer consectetur efficitur tempor. Nunc sollicitudin felis congue facilisis faucibus. Mauris faucibus sit amet ante eleifend dapibus.</p>
      <p style={{ marginBottom: 0 }}>Nunc semper eu lectus ac blandit. Fusce iaculis dolor sit amet felis placerat, non auctor nibh pellentesque. Nunc dignissim, tortor eget sollicitudin pulvinar, sem est sagittis nisi, non condimentum orci felis vel libero. Aenean <a href="#3">third link</a> a tempus lorem. Proin a enim id magna malesuada consectetur mattis eget massa. Sed volutpat neque vitae tortor dignissim dapibus. Ut a ante maximus, sollicitudin nisi ut, varius magna. Vestibulum maximus urna eget commodo egestas. Donec sollicitudin tortor ac mauris pulvinar, ac maximus urna tempus. Mauris non libero posuere, ullamcorper neque vel, tempor sem. Suspendisse potenti. In tristique et metus id laoreet.</p>
    </div>
  );
  const modalProps = {
    ariaLabel: 'A label describing the Modal\'s current content',
    triggerText: 'This is a button to trigger the Modal',
    role: 'alertdialog'
  };

  return (
    <main className="content">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sagittis erat ut ex bibendum consequat. Morbi luctus ex ex, at varius purus vehicula consectetur. Curabitur a sapien a augue consequat rhoncus. Suspendisse commodo ullamcorper nibh quis blandit. Etiam viverra neque quis mauris efficitur, lobortis aliquam ex pharetra. Nam et ante ex. Sed gravida gravida ligula, non blandit nunc. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Integer consectetur efficitur tempor. Nunc sollicitudin felis congue facilisis faucibus. Mauris faucibus sit amet ante eleifend dapibus.</p>
      <p>Nunc semper eu lectus ac blandit. <Modal {...modalProps}>{modalContent}</Modal> Fusce iaculis dolor sit amet felis placerat, non auctor nibh pellentesque. Nunc dignissim, tortor eget sollicitudin pulvinar, sem est sagittis nisi, non condimentum orci felis vel libero. Aenean a tempus lorem. Proin a enim id magna malesuada consectetur mattis eget massa. Sed volutpat neque vitae tortor dignissim dapibus. Ut a ante maximus, sollicitudin nisi ut, varius magna. Vestibulum maximus urna eget commodo egestas. Donec sollicitudin tortor ac mauris pulvinar, ac maximus urna tempus. Mauris non libero posuere, ullamcorper neque vel, tempor sem. Suspendisse potenti. In tristique et metus id laoreet.</p>
      <p>Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Etiam id tellus ut purus sodales facilisis facilisis ut lacus. Donec cursus sapien eget tellus mollis, eget lobortis ex laoreet. Morbi eu augue metus. Duis porta convallis ligula, sed consectetur enim. Donec molestie mollis magna ultricies dignissim. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec ut mi molestie nisl pellentesque iaculis. Nulla ut massa eu metus eleifend lobortis id et erat. Sed eros mauris, imperdiet ac nulla vel, efficitur eleifend mi. Integer metus ante, ultrices eget luctus non, tincidunt eu magna. Suspendisse eu massa ante. Fusce mattis blandit mi, non vulputate sapien rutrum ac.</p>
      <p>Nulla pretium euismod turpis vel ornare. Sed quis diam rutrum, feugiat nisi placerat, tincidunt nibh. Maecenas neque nulla, aliquet ac mauris vel, condimentum lobortis ligula. Etiam venenatis in velit non pulvinar. Aenean elementum pretium risus et maximus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nunc nisl tortor, tristique et sollicitudin quis, facilisis ac est. Fusce et est non eros placerat rhoncus sit amet sit amet dui. Duis suscipit, magna vehicula sollicitudin convallis, turpis massa interdum sapien, id commodo lectus tortor sed elit. Vivamus eget purus non lectus feugiat venenatis vitae sed sapien. Nulla ut leo urna. In at eleifend purus, ut condimentum risus. Maecenas non viverra eros. Quisque dignissim suscipit dui ut vestibulum. Sed hendrerit quam quis risus tempus varius.</p>
      <p>Sed eu malesuada felis. Duis facilisis varius orci, quis mollis enim porttitor a. Nam dictum vulputate libero, id dapibus turpis gravida vitae. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet arcu in dolor feugiat ornare in ut orci. Donec sem purus, vehicula et metus quis, commodo tempus nisl. Aliquam efficitur lectus magna. Donec tempus vitae tortor vel ultricies. Nunc semper nunc eros, nec iaculis mi tincidunt a.</p>
    </main>
  );
}

export default App;
