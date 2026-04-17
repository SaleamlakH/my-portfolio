import style from './project-image.module.css';

function ProjectImage({ width = '300px', height = '100%' }) {
  return (
    <div className={style.card} style={{ width, height }}>
      <div className={style.body}>
        {/* Left section */}
        <div className={style.left}>
          <div className={style.line}></div>
          <div className={style.line}></div>
          <div className={style.line}></div>

          <div className={style.box}></div>
        </div>

        {/* Right section */}
        <div className={style.right}>
          <div className={style.bigBox}></div>

          <div className={style.textLine}></div>
          <div className={style.textLine}></div>
          <div className={style.textLine}></div>
          <div className={style.textLineShort}></div>
          <div className={style.textLine}></div>
        </div>
      </div>
    </div>
  );
}

export default ProjectImage;
