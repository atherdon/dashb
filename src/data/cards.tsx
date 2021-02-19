import {
  TopAuthors,
  Baa,
  StepsPage,
  Keywords,
  EditedStories
} from 'components/Links/CardMoreLinks/CardMoreLinks';

const cards = [
  {
    title: 'TOP Authors',
    hoverable: true,
    extra: TopAuthors,
    content: null
  },
  {
    title: 'Evergreen',
    hoverable: true,
    extra: Baa,
    content: null
  },
  //   {
  //     title: 'Featured TOP Stories',
  //     hoverable: true,
  //     extra: null,
  //     content: (
  //       <>
  //         <p>desc</p>
  //         <p>desc</p>
  //       </>
  //     )
  //   },
  //   {
  //     title: 'Managed Accounts',
  //     hoverable: true,
  //     extra: null,
  //     content: (
  //       <>
  //         <p>desc</p>
  //       </>
  //     )
  //   },
  //   {
  //     title: 'Stats',
  //     hoverable: true,
  //     extra: null,
  //     content: (
  //       <>
  //         <p>desc</p>
  //       </>
  //     )
  //   },
  {
    title: 'Edited Stories',
    hoverable: true,
    extra: EditedStories,
    content: null
  },
  //   {
  //     title: 'Today Submined stories',
  //     hoverable: true,
  //     extra: null,
  //     content: (
  //       <>
  //         <p>desc</p>
  //       </>
  //     )
  //   },
  //   {
  //     title: 'Search',
  //     hoverable: true,
  //     extra: null,
  //     content: (
  //       <>
  //         <p>desc</p>
  //       </>
  //     )
  //   },
  //   {
  //     title: 'Published Stories',
  //     hoverable: true,
  //     extra: null,
  //     content: (
  //       <>
  //         <p>desc</p>
  //       </>
  //     )
  //   },
  //   {
  //     title: 'Reports',
  //     hoverable: true,
  //     extra: null,
  //     content: (
  //       <>
  //         <p>desc</p>
  //       </>
  //     )
  //   },
  {
    title: 'Steps',
    hoverable: true,
    extra: StepsPage,
    content: null
  },
  {
    title: 'Keywords',
    hoverable: true,
    extra: Keywords,
    content: null
  }
];

export { cards };
