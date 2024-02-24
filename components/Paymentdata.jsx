import axios from "axios"

// ... other imports

export async function getServerSideProps(context) {
  const modifiedPathname = context.params.modifiedPathname; // Get parameter if needed

  try {
    const { data } = await axios.post("https://tokenized.sandbox.bka.sh/v1.2.0-beta/tokenized/checkout/execute", { modifiedPathname }, {
      headers: await this.bkash_headers()
    });

    return {
      props: {
        paymentData: data
      }
    }
  } catch (error) {
    return {
      props: {
        error: error.message
      }
    }
  }
}

const Paymentdata = ({ paymentData, error }) => {
  if (error) {
    return <div>Error: {error}</div>
  }

  return (
    <div>
      {/* Use the paymentData here */}
    </div>
  );
}

export default Paymentdata;
