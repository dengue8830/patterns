// Problem: Class matrix about types and behaviour.
// Solution: Add behaviour in a different place.

class Page {
  render(props?) {}
}

class AdminPage extends Page {
  render(props?) {}
}

class FeedPage extends Page {
  render(props?) {}
}

function withServerSideProps(page: Page): Page {
  const context = {};
  const routes = {};

  return {
    render() {
      page.render({ context, routes });
    },
  };
}

function withAuth(page: Page): Page {
  return {
    render(props) {
      if (props.routes.isAdminRoute && !props.context.isAdmin) {
        throw Error("403");
      }
      page.render(props);
    },
  };
}

function main() {
  withServerSideProps(withAuth(new AdminPage())).render();
  withServerSideProps(new FeedPage()).render();
}
