import Theme from 'rspress/theme';

const Layout = () => <Theme.Layout beforeNavTitle={<div>h7ml</div>} />;

export default {
  ...Theme,
  Layout,
};

export * from 'rspress/theme';
