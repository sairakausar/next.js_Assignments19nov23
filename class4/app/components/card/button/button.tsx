import Link from 'next/link'

export default function MyButton({ ball, title }: any) {
  return (
    <div>
      <Link href="/about">
        <button
          className="mx-10 my-20 p-2"
          style={{
            border: "4px solid ",
            color: "yellow",
            backgroundColor: "purple",
          }}
        >
          Back to button {title} {ball}
        </button>
      </Link>
    </div>
  );
}
