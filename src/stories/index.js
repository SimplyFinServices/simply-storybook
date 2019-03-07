import React from 'react';

import { storiesOf, configure, addParameters } from '@storybook/react';
import { create } from '@storybook/theming';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import {
  Features1,
  Features2,
  Features9,
  Features14,
  Features23,
  Features24,
  Gallery5,
  Gallery8,
  Text2,
  Text6,
  Text7,
  Text16,
  Text17,
  Cta1,
  Cta2,
  Cta4,
  Cta11,
  Cta14,
  Button } from '@simply-fin-services/astronomix';

// const buttonTypes = ['primary', 'secondary', 'success', 'info', 'danger', 'ghost', 'filled'];

const theme = create({ base: 'light', colorPrimary: '#2597D0', colorSecondary: '#FF4785' });
addParameters({ options: { theme } });

const AstroButtons = storiesOf('Buttons', module);

AstroButtons
  .addDecorator(story => <div style={{ padding: '3rem' }}>{story()}</div>)
  .add('Primary Button',() => <Button type="primary" size="medium" onClick={action('clicked')}>Primary</Button>)
  .add('Secondary Button',() => <Button type="secondary" size="medium" onClick={action('clicked')}>Secondary</Button>)
  .add('Tertiary Button',() => <Button type="tertiary" size="medium" onClick={action('clicked')}>Tertiary</Button>)
  .add('Success Button',() => <Button type="success" size="medium" onClick={action('clicked')}>Success</Button>)
  .add('Info Button',() => <Button type="info" size="medium" onClick={action('clicked')}>Info</Button>)
  .add('Danger Button',() => <Button type="danger" size="medium" onClick={action('clicked')}>Danger</Button>)
  .add('Ghost Button',() => <Button type="ghost" size="medium" onClick={action('clicked')}>Ghost</Button>)
  .add('Filled Button',() => <Button type="filled" size="medium" onClick={action('clicked')}>Filled</Button>)

const AstroLandingPageComponents = storiesOf('Landing Page', module);

AstroLandingPageComponents
  .addDecorator(story => <div style={{ padding: '3rem' }}>{story()}</div>)
  .add('Features1',() => <Features1 />)
  .add('Features2',() => <Features2 />)
  .add('Features9',() => <Features9 />)
  .add('Features14',() => <Features14 />)
  .add('Features23',() => <Features23 />)
  .add('Features24',() => <Features24 />)
  .add('Gallery5',() => <Gallery5 />)
  .add('Gallery8',() => <Gallery8 />)
  .add('Text2',() => <Text2 />)
  .add('Text6',() => <Text6 />)
  .add('Text7',() => <Text7 />)
  .add('Text16',() => <Text16 />)
  .add('Text17',() => <Text17 />)
  .add('Cta1',() => <Cta1 />)
  .add('Cta2',() => <Cta2 />)
  .add('Cta4',() => <Cta4 />)
  .add('Cta11',() => <Cta11 />)
  .add('Cta14',() => <Cta14 />)

// storiesOf('Emoji', module)
//   .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
//   .add('with some emoji', () => (
//     <Button onClick={action('clicked')}>
//       <span role="img" aria-label="so cool">
//         😀 😎 👍 💯
//       </span>
//     </Button>
//   ));

// const types = ['primary', 'secondary', 'success', 'info', 'danger', 'ghost', 'filled'];
// storiesOf('All Buttons', module).addWithJSX('type', () =>
//   <div>
//     {types.map((t) =>
//       <Button type={t}>{t}</Button>)}
//   </div>
// );

// const sizes = ['small', 'medium', 'fluid'];
// stories.addWithJSX('size', () =>
//   <div>
//     {sizes.map((s) =>
//       <Button type="primary" size={s}>{s}</Button>
//     )}
//   </div>
// );


// stories.addWithJSX(
//   'circle',
//   () => <Button type="primary" icon="face" circle />,
//   {info: {disable: false, text: 'Use circle in conjunction with the icon prop to render round icon buttons'}}
// );

// storiesOf('Emoji', module)
//   .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
//   .add('with some emoji', () => (
//     <Button onClick={action('clicked')}>
//       <span role="img" aria-label="so cool">
//         😀 😎 👍 💯
//       </span>
//     </Button>
//   ));
