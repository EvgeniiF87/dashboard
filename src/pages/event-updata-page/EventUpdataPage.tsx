import { ContentHeader } from "../../shared";
import { UpdataEventForm } from "../../widgets";

const breadcrumbEventsPage = [
    { name: "Главная", href: "/" },
    { name: "Список событий", href: "/events" },
    { name: "Pедактировать", href: null },
  ];

export default function EventUpdataPage() {
  return (
    <>
      <ContentHeader
        title="Pедактировать событие"
        breadcrumbs={breadcrumbEventsPage}
      />
      <UpdataEventForm />
    </>
  );
}
