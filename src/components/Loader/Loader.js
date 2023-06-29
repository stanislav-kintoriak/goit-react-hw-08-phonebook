import { ThreeDots } from 'react-loader-spinner';

import css from './Loader.module.scss';

const Loader = () => {
  return (
    <div className={css.loader__container}>
      <ThreeDots
        height="80"
        width="80"
        radius="9"
        color="#17263b"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
      />
    </div>
  );
};

export default Loader;
