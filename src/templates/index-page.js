import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'

import Features from '../components/Features'
import BlogRoll from '../components/BlogRoll'
import Layout from '../components/Layout'

export const IndexPageTemplate = ({
  image,
  title,
  heading,
  subheading,
  subheading2,
  subheading3,
  mainpitch,
  description,
  intro,
}) => (
  <div>
    <div
      className="full-width-image margin-top-0"
      style={{
        backgroundImage: `url(${
          !!image.childImageSharp ? image.childImageSharp.fluid.src : image
        }),linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5))`,
        backgroundBlendMode: 'overlay',
        backgroundPosition: `top left`,
        height: '100vh'
      }}
    >
      <div
        style={{
          display: 'flex',
          height: '150px',
          lineHeight: '1',
          justifyContent: 'space-around',
          alignItems: 'left',
          flexDirection: 'column',
          flexWrap: 'nowrap'
        }}
      >
        <div className="column is-one-half is-offset-one-fourth">
          <h1
            className="is-size-3-mobile is-size-2-tablet is-size-1-widescreen"
            style={{
              color: 'white',
              lineHeight: '1',
              padding: '0.25em',
              fontFamily:'Holtwood One SC',
            }}
          >
            {title}
          </h1>
        </div>
        <div className="column is-one-half is-offset-one-fourth">
          <h3
            className="is-size-5-mobile is-size-5-tablet is-size-4-widescreen"
            style={{
              color: '#f6bf01',
              lineHeight: '1',
              padding: '0.25em',
              wordWrap: 'normal',
            }}
          >
            {subheading}
          </h3>
        </div>
        <div className="column is-one-half is-offset-one-fourth">
          <h3
            className="is-size-5-mobile is-size-5-tablet is-size-4-widescreen"
            style={{
              color: '#f6bf01',
              lineHeight: '1',
              padding: '0.25em',
            }}
          >
            {subheading2}
          </h3>
        </div>
        <div className="column is-one-half is-offset-one-fourth">
          <h3
            className="is-size-6-mobile is-size-6-tablet is-size-4-widescreen"
            style={{
              color: 'white',
              lineHeight: '1',
              padding: '0.25em',
              fontStyle: 'italic'
            }}
          >
            {subheading3}
          </h3>
        </div>
      </div>
    </div>
    <section className="section section--gradient">
      <div className="container">
        <div className="section">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <div className="content">
                <div className="content">
                  <div className="tile">
                    <h1 className="title">{mainpitch.title}</h1>
                  </div>
                  <div className="tile">
                    <h3 className="subtitle">{mainpitch.description}</h3>
                  </div>
                </div>
                <div className="columns">
                  <div className="column is-12">
                    <h3 className="has-text-weight-semibold is-size-2">
                      {heading}
                    </h3>
                    <p>{description}</p>
                  </div>
                </div>
                <Features gridItems={intro.blurbs} />
                <div className="columns">
                  <div className="column is-12 has-text-centered">
                    <Link className="btn" to="/products">
                      See all products
                    </Link>
                  </div>
                </div>
                <div className="column is-12">
                  <h3 className="has-text-weight-semibold is-size-2">
                    Latest stories
                  </h3>
                  <BlogRoll />
                  <div className="column is-12 has-text-centered">
                    <Link className="btn" to="/blog">
                      Read more
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
)

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  subheading2: PropTypes.string,
  subheading3: PropTypes.string,
  mainpitch: PropTypes.object,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
}

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        subheading2={frontmatter.subheading2}
        subheading3={frontmatter.subheading3}
        mainpitch={frontmatter.mainpitch}
        description={frontmatter.description}
        intro={frontmatter.intro}
      />
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        heading
        subheading
        subheading2
        subheading3
        mainpitch {
          title
          description
        }
        description
        intro {
          blurbs {
            image {
              childImageSharp {
                fluid(maxWidth: 240, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            text
          }
          heading
          description
        }
      }
    }
  }
`
