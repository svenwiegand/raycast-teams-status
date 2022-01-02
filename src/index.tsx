import {ActionPanel, ColorLike, Icon, List, OpenInBrowserAction} from "@raycast/api";

const stat = (key: string, title: string, icon: string, color?: ColorLike) => ({
    id: key,
    icon: { source: icon, tintColor: color },
    title,
    key,
})
const status = [
    stat("available", "Available", Icon.Checkmark, "green"),
    stat("busy", "Busy", Icon.Desktop, "red"),
    stat("doNotDisturb", "Do not disturb", Icon.Bubble, "red"),
    stat("pause", "Pause", Icon.Clock, "orange"),
    stat("endOfWork", "End of Work", Icon.XmarkCircle, "purple"),
    stat("weekend", "Weekend", Icon.XmarkCircle, "purple"),
]

export default function Command() {
    return (
        <List isLoading={false} searchBarPlaceholder="Filter by title...">
            {status.map(status => (
                <List.Item
                    {...status}
                    actions={
                        <ActionPanel>
                            <OpenInBrowserAction
                                title="Set Status"
                                icon={Icon.ArrowRight}
                                url={`shortcuts://run-shortcut?name=Teams%20Status&input=text&text=${status.key}`}
                            />
                        </ActionPanel>
                    }
                />
            ))}
        </List>
    );
}
