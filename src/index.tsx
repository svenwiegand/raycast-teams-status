import { ActionPanel, CopyToClipboardAction, Icon, List } from "@raycast/api";

export default function Command() {
  const items = Array.from(Array(10).keys()).map((key) => {
    return {
      id: key,
      title: "Title " + key,
      subtitle: "Subtitle",
      accessoryTitle: "Accessory Title",
    };
  });

  return (
    <List isLoading={false} searchBarPlaceholder="Filter by title...">
      {items.map((item) => (
        <List.Item
          key={item.id}
          icon="list-icon.png"
          title={item.title}
          subtitle={item.subtitle}
          accessoryTitle={item.accessoryTitle}
          accessoryIcon={{ source: Icon.Circle }}
          actions={
            <ActionPanel>
              <CopyToClipboardAction content={item.title} />
            </ActionPanel>
          }
        />
      ))}
    </List>
  );
}
