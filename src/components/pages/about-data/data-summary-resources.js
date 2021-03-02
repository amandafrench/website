import { Link } from 'gatsby'
import React from 'react'
import dataSummaryStyle from './data-summary.module.scss'

const DataSummaryResources = ({ resources }) => {
  if (!resources) {
    return null
  }
  return (
    <>
      {resources.map(resource => (
        <div className={dataSummaryStyle.resource}>
          <h3>{resource.name}</h3>
          <div
            dangerouslySetInnerHTML={{
              __html: resource.description.childMarkdownRemark.html,
            }}
          />
          {resource.linkUrl && resource.linkTitle && (
            <p>
              <strong>Link:</strong>{' '}
              <a href={resource.linkUrl}>{resource.linkTitle}</a>
            </p>
          )}
          {resource.downloadLinkUrl && resource.downloadLinkTitle && (
            <p>
              <strong>Download link:</strong>{' '}
              <a href={resource.downloadLinkUrl}>
                {resource.downloadLinkTitle}
              </a>
            </p>
          )}
          {resource.screenshots.map(screenshot => (
            <div className={dataSummaryStyle.screenshot}>
              <img src={screenshot.fixed.src} alt={screenshot.title} />
            </div>
          ))}
          {resource.relatedPosts && (
            <>
              <h4>Our related posts</h4>
              <ul>
                {resource.relatedPosts.map(post => (
                  <li>
                    <Link
                      to={
                        post.sys.contentType.sys.id === 'blog'
                          ? `/analysis-updates/${post.slug}`
                          : `/${post.slug}`
                      }
                    >
                      {post.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>
      ))}
    </>
  )
}

export default DataSummaryResources
