import * as React from "react";
import { match } from "react-router";
import pageSvc from "../../../services/api/pageService";
import PageSection from "../../molecules/PageSection";

export interface PageProps {
  match?: match<any>;
}

export interface PageState {
  page: any;
}

class Page extends React.Component<PageProps, PageState> {
  state = { page: null };

  async componentWillMount() {
    const { match } = this.props;
    if (!match) return;

    const { slug } = match.params;
    const { data } = await new pageSvc().find(slug);
    const page = data[0];
    this.setState({ page });
  }

  render() {
    const { page } = this.state;
    if (!page) return <p>Not found...</p>;

    return (
      <PageSection>
        <h1>{page.title.rendered}</h1>
        <div dangerouslySetInnerHTML={{ __html: page.content.rendered }} />
        <p dangerouslySetInnerHTML={{ __html: page.excerpt.rendered }} />
      </PageSection>
    );
  }
}

export default Page;
