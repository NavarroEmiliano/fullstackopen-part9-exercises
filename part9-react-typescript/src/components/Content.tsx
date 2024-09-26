import Part from './Part';
import { CoursePart } from '../App';

type Props = {
  courseParts: CoursePart[];
};

const Content = (props: Props) => {
  return (
    <main>
      {props.courseParts.map((course: CoursePart) => (
        <Part coursePart={course} />
      ))}
    </main>
  );
};

export default Content;
