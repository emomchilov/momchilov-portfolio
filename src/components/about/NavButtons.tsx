import Button from "../shared/Button";

export function NavButtons() {
    return (
        <div className="flex flex-col pb-12">
            <Button onClick={() => null}>
                tech
            </Button>
            <Button onClick={() => null}
            >photo + video</Button>
            <Button onClick={() => null}
            >github</Button>
            <Button onClick={() => null}
            >contact</Button>
        </div>
    )
}