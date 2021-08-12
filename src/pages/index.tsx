import { Button } from '@material-ui/core';
import Head from 'next/head';
import Image from 'next/image';
import DashboardLayout from '../layouts/DashboardLayout';

// import { GetStaticProps, GetStaticPaths, GetServerSideProps } from 'next'

export default function Home() {
  return (
    <DashboardLayout>
      <Button>Btn</Button>
    </DashboardLayout>
  )
}



// export const getStaticProps: GetStaticProps = async context => {
//   // ...
// }

// export const getStaticPaths: GetStaticPaths = async () => {
//   // ...
// }

// export const getServerSideProps: GetServerSideProps = async context => {
//   // ...
// }