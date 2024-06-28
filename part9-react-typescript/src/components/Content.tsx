interface CoursePart {
  name: String
  exerciseCount: number
}

type Props = {
  courseParts: CoursePart[]
}

const Content = (props: Props) => {
  return (
    <main>
      <p>
        {props.courseParts[0].name} {props.courseParts[0].exerciseCount}
      </p>
      <p>
        {props.courseParts[1].name} {props.courseParts[1].exerciseCount}
      </p>
      <p>
        {props.courseParts[2].name} {props.courseParts[2].exerciseCount}
      </p>
    </main>
  )
}

export default Content
