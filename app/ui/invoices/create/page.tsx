import Form from '@/app/ui/invoices/create-form';
import Breadcrumbs from '@/app/ui/invoices/breadcrumbs';
import { fetchCustomers } from '@/app/lib/data';
 
export default async function Page() {
  // Fetching customers data from the server
  const customers = await fetchCustomers();
 
  return (
    <main>
      {/* Breadcrumbs component for navigation. It receives an array of objects, each representing a breadcrumb */}
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Invoices', href: '/dashboard/invoices' },
          {
            label: 'Create Invoice',
            href: '/dashboard/invoices/create',
            active: true,
          },
        ]}
      />
      {/* Form component for creating an invoice. It receives the fetched customers data as a prop */}
      <Form customers={customers} />
    </main>
  );
}