/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require('path');


exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return new Promise((resolve, reject) => {
    graphql(`
      {
        allGoogleSheetReglerneRow {
          edges{
            node{
                regeltekst
                navn
                slug
                episode
                episodeurl
                hinter
                hinterurl
            }
          }
        }
      }
    `).then(result => {
      result.data.allGoogleSheetReglerneRow.edges.forEach(({ node }) => {
        console.log(node);
        createPage({
          path: node.slug,
          component: path.resolve(`./src/templates/regel.js`),
          context: {
            slug: node.slug,
          },
        })
      })
      resolve()
    })
  })
}




// exports.createPages = ({ graphql, actions }) => {
    // const { createPage } = actions;
    // return new Promise((resolve, reject) => {
    //   graphql(`
    //     {
    //         allGoogleSheetReglerneRow() {
                // edges{
                //     node{
                //         regeltekst
                //         navn
                //         slug
                //         episode
                //         episodeurl
                //         hinter
                //         hinterurl
                //     }
                // }
    //         }
    //     }
    //   `)
      // .then(result => {
    //     result.data.allGoogleSheetReglerneRow.edges.forEach(({ node }) => {
    //       createPage({
    //         path: node.slug,
    //         component: path.resolve(`./src/components/regel.js`),
    //         context: {
    //           slug: node.slug,
    //         },
    //       })
    //     })
    //     resolve()
      // })
  //   })
  // }








// exports.createPages = async ({ graphql, actions, reporter }) => {
//     const { createPage } = actions
//     const result = await graphql(
//       `
//         {
            // allGoogleSheetReglerneRow(sort: {order: ASC, fields: navn}) {
            //     edges{
            //         node{
            //             regeltekst
            //             navn
            //             slug
            //             episode
            //             episodeurl
            //             hinter
            //             hinterurl
            //         }
            //     }
            // }
//         }
//       `)
//     if (result.errors) {
//       reporter.panicOnBuild('Error while running GraphQL query.')
//       return
//     }
  
//     const posts = result.data.allGoogleSheetReglerneRow.edges
//     // const postsPerPage = 5
//     // const numPages = Math.ceil(posts.length / postsPerPage)
//     // Array.from({ length: numPages }).forEach((_, i) => {
//     //   createPage({
//     //     path: i === 0 ? '/' : `/page/${i + 1}`,
//     //     component: path.resolve('./src/templates/Listing.tsx'),
//     //     context: {
//     //       limit: postsPerPage,
//     //       skip: i * postsPerPage,
//     //       currentPage: i + 1,
//     //     },
//     //   })
//     // })
  
//     posts.forEach((p) => {
//       createPage({
//         path: `/${p.node.slug}`,
//         component: path.resolve('./src/components/regel.js'),
//         context: {
//           slug: p.node.slug,
//         },
//       })
//     })
//   }
  
//   exports.onCreateNode = ({ node, actions, getNode }) => {
//     const { createNodeField } = actions
   
//     const value = createFilePath({ node, getNode })
//     createNodeField({
//         name: 'slug',
//         node,
//         value,
//     })
//   }