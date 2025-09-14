import React from 'react';
import Icon from '../Icon/Icon.jsx';
import Button from '../Button/Button.jsx';

function ErrorPage() {
  return (
    <section className='flex flex-col gap-6 justify-center items-center py-16 px-9'>
      <Icon className='min-w-11' variant='error' />
      <h1 className='text-preset-2 text-neutral-000'>Something went wrong</h1>
      <p className='text-preset-5-med text-neutral-200'>We couldn’t connect to the server (API error). Please try again in a few moments.</p>
      <Button className='btn-secondary flex gap-2.5'>
        <Icon variant='retry'/>
        Retry
      </Button>
    </section>
  )
}

export default ErrorPage;
