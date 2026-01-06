const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
  60,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('#bg'),
  alpha: true
});

renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.z = 30;

const geometry = new THREE.TorusKnotGeometry(10, 3, 120, 16);
const material = new THREE.MeshBasicMaterial({
  wireframe: true,
  color: 0x00e5ff,
  opacity: .15,
  transparent: true
});

const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

function animate() {
  requestAnimationFrame(animate);
  mesh.rotation.x += 0.001;
  mesh.rotation.y += 0.001;
  renderer.render(scene, camera);
}

animate();

window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});
