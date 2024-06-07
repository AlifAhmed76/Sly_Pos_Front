
import Helmet from 'react-helmet';

const BreadCrumb = ({title}) => {
  return (
    <div>
      <Helmet>
        <title>{title} || Sly Pos</title>
      </Helmet>
      <h1 className="mt-4">Dashboard</h1>
      <ol className="breadcrumb my-4">
        <li className='breadcrumb-item text-theme-light'>Dashboard</li>
        <li className="breadcrumb-item active">{title}</li>
      </ol>
    </div>
  );
};

export default BreadCrumb;
