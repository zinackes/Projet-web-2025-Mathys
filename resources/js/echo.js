import Echo from 'laravel-echo';
import Pusher from 'pusher-js';

window.Pusher = Pusher;

window.Echo = new Echo({
    broadcaster: 'pusher',
    key: 'fb2584ee7cb99f750c4e',  // Clé Pusher
    cluster: 'eu',  // Cluster Pusher
    forceTLS: true
});

Echo.channel('cohort-channel')
    .listen('CohortUpdated', (event) => {
        console.log('Cohort updated:', event.cohort);
    });
