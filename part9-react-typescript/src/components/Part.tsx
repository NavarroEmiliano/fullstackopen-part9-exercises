import { CoursePart } from '../App';

type Props = {
  coursePart: CoursePart;
};

const Part = (props: Props) => {
  const assertNever = (value: never): never => {
    throw new Error(
      `Unhandled discriminated union menber: ${JSON.stringify(value)}`
    );
  };
  switch (props.coursePart.kind) {
    case 'basic':
      return (
        <div>
          <h4>
            {props.coursePart.name} {props.coursePart.exerciseCount}
          </h4>
          <i>{props.coursePart.description}</i>
        </div>
      );
    case 'group':
      return (
        <div>
          <h4>
            {props.coursePart.name} {props.coursePart.exerciseCount}
          </h4>
          <i>Project exercises {props.coursePart.groupProjectCount}</i>
        </div>
      );
    case 'background':
      return (
        <div>
          <h4>
            {props.coursePart.name} {props.coursePart.exerciseCount}
          </h4>
          <i>{props.coursePart.description}</i>
          <p>{props.coursePart.backgroundMaterial}</p>
        </div>
      );
    case 'special':
      return (
        <div>
          <h4>
            {props.coursePart.name} {props.coursePart.exerciseCount}
          </h4>
          <i>{props.coursePart.description}</i>
          <p>{props.coursePart.requeriments.join(', ')}</p>
        </div>
      );
    default:
      return assertNever(props.coursePart);
  }
};

export default Part;
