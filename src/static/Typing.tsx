import { TypeAnimation } from 'react-type-animation';

function Typing() {
  return (
    <TypeAnimation
      sequence={[
        "Hardware",
        500,
        "Infosec",
        500,
        "ML / AI",
        500,
        "APIs",
        500,
        "Embed. Sys.",
        500,
        "HPC",
        500,
        "Science",
        500,
        "C / C++",
        500
      ]}
      wrapper="span"
      speed={10}
      preRenderFirstString={true}
      style={{ marginLeft: '5px', fontSize: '1em', textAlign: 'left', color: "#84ffff", fontWeight: 'bold', display: 'inline-block', width: '38.5%' }}
      repeat={1}
    />
  );
};

export default Typing;