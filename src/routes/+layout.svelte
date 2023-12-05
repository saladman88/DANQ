<script lang="ts">
	import { page } from '$app/stores';
	import '../app.postcss';
	import { AppShell, AppBar } from '@skeletonlabs/skeleton';
	import { TabGroup, Tab, TabAnchor } from '@skeletonlabs/skeleton';

	// icon
	import 'iconify-icon'
	// Floating UI for Popups
	import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom';
	import { storePopup } from '@skeletonlabs/skeleton';
	storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });
</script>

<!-- App Shell -->
<AppShell>
	<svelte:fragment slot="footer">
		<!-- App Bar -->

		
		<TabGroup 
			justify="justify-center"
			active="variant-filled-primary"
			hover="hover:variant-soft-primary"
			flex="flex-1 lg:flex-none"
			rounded=""
			border=""
			class="bg-surface-100-800-token w-full"
		>
			<TabAnchor href="/inventory" selected={$page.url.pathname === '/inventory'}>
				<svelte:fragment slot="lead">
					<iconify-icon icon="material-symbols:inventory-2-rounded"></iconify-icon>
				</svelte:fragment>
				<span class="uppercase">inventory</span>
			</TabAnchor>
			<TabAnchor href="/report" selected={$page.url.pathname === '/report'}>
				<svelte:fragment slot="lead">
					<iconify-icon icon="carbon:report"></iconify-icon>
				</svelte:fragment>
				<span class="uppercase">report</span>
			</TabAnchor>
		</TabGroup>






		<!-- <AppBar gridColumns="grid-cols-3" slotDefault="place-self-center" slotTrail="place-content-end">
			<svelte:fragment slot="lead">
				Billing
			</svelte:fragment>
			(title)
			<svelte:fragment slot="trail">
				Inventory
			</svelte:fragment>
		</AppBar> -->
	</svelte:fragment>
	<!-- Page Route Content -->
	<slot />
</AppShell>
