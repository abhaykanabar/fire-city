



using UnityEngine;

public class Grenade : MonoBehaviour
{
    public float delay = 3f;
    public float radius = 5f;
    public int damage = 50;
    public GameObject explosionEffect;

    void Start()
    {
        Invoke("Explode", delay);
    }

    void Explode()
    {
        Instantiate(explosionEffect, transform.position, transform.rotation);
        Collider[] hits = Physics.OverlapSphere(transform.position, radius);
        foreach(var hit in hits)
        {
            if (hit.CompareTag("Player")) {
                hit.GetComponent<PlayerController>().TakeDamage(damage);
            }
        }
        Destroy(gameObject);
    }
}






