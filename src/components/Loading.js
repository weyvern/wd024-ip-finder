import Layout from './Layout';

const Loading = () => {
  return (
    <Layout className='row justify-content-center align-items-center'>
      <div className='spinner-border' role='status'>
        <span className='visually-hidden'>Loading...</span>
      </div>
    </Layout>
  );
};

export default Loading;
